import ScaleDownDestroy from '../../../plugins/scale-down-destroy.js';

const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
const GetValue = Phaser.Utils.Objects.GetValue;

export default function (duration, orientation, ease) {
    if (IsPlainObject(duration)) {
        var config = duration;
        duration = GetValue(config, 'duration', undefined);
        orientation = GetValue(config, 'orientation', undefined);
        ease = GetValue(config, 'ease', undefined);
    }
    ScaleDownDestroy(this, duration, orientation, ease);
    return this;
}