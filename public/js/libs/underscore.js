define('underscore', [
    'lodash',
    'underscore.string'
], function (_, _s) {
    //MERGE STRING PLUGIN TO UNDERSCORE NAMESPACE
    _.mixin(_s.exports());
    return _;
});
