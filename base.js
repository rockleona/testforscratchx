(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.cacu = function(number){
        return number**2
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ','square of %n','cacu']
        ]
    };

    // Register the extension
    ScratchExtensions.register('SimpleCaculate', descriptor, ext);
})({});