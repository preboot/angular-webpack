var fs = require("fs");
var path = require("path");
var chokidar = require("chokidar");
var shelljs = require("shelljs");
var remapIstanbul = require("remap-istanbul");

var RemapCoverageReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
    //baseReporterDecorator(this);

    var remapCoverageReporterConfig = config.remapCoverageReporter || {};
    var sourceDir = remapCoverageReporterConfig.srcDir;
    var sourceFile = remapCoverageReporterConfig.srcFile;
    var sourceFilePath = path.join(sourceDir, sourceFile);
    var htmlOutput = remapCoverageReporterConfig.htmlOutput;
    var lcovOutput = remapCoverageReporterConfig.lcovOutput;

    var pendingExecution = false;
    var executionDone;
    var log = logger.create("reporter.remap-coverage");
    var watcher = null;
    this.onBrowserComplete = function() {
        pendingExecution = true;
        
        // since in the very first execution, the source dir would not exists
        // we check this condition and create the coverage directory
        // otherwise remap coverage would fail because chokidar
        // can not listen to a non existent directory 
        if (!shelljs.test('-d', sourceDir)) {
            shelljs.mkdir('-p', sourceDir);
        };

        watcher = chokidar.watch(sourceDir, {
            awaitWriteFinish: {
                stabilityThreshold: 500,
                pollInterval: 100
            }
        }).on("add", function(file_path) {
            var cvFile = path.join(sourceDir, "coverage-summary.txt"); 
            remapIstanbul(sourceFilePath, {
                html: htmlOutput,
                "text": cvFile,
                "lcovonly": lcovOutput
            }).then(
                function(response) {
                    var summary = fs.readFileSync(cvFile);
                    console.log(String(summary));
                    completeExecution();
                    
                },
                function(errorResponse) {
                    log.warn(errorResponse);
                    completeExecution();
                }
            );
        });

    };

    function completeExecution() {
        if (watcher) {
            watcher.close();
        }
        executionDone();
        
    }

    this.onExit = function(done) {
        if (pendingExecution) {
            executionDone = done;
        } 
    };

}


function exitHandler(options, err) {
    if (err) console.log(err.stack);
    if (options.exit) process.abort();
}

//catches ctrl+c event
process.on("SIGINT", exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));

RemapCoverageReporter.$inject = ["baseReporterDecorator", "config", "logger", "helper", "formatError"];

module.exports = {
    "reporter:remap-coverage": ["type", RemapCoverageReporter]
}
