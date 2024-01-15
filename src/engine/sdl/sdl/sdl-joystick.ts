import {int32, int32_ptr, Sint16, string, uint32, Uint8, voit} from './types';
import {loadLibrary} from './lib-loader';

const ref = require('ref-napi');
const ArrayType = require('ref-array-di')(ref);
const Struct = require('ref-struct-di')(ref);

const SDL = {} as any;

export enum SDL_JoystickPowerLevel {
    SDL_JOYSTICK_POWER_UNKNOWN = -1,
    SDL_JOYSTICK_POWER_EMPTY = 0,
    SDL_JOYSTICK_POWER_LOW = 1,
    SDL_JOYSTICK_POWER_MEDIUM = 2,
    SDL_JOYSTICK_POWER_FULL = 3,
    SDL_JOYSTICK_POWER_WIRED = 4,
    SDL_JOYSTICK_POWER_MAX = 5
}

export const SDL_Joystick = voit;

export const SDL_JoystickGUID = Struct({
    data: ArrayType(Uint8, 16),
});

export const SDL_JoystickID = uint32;

export const SDL_Joystick_ptr = ref.refType(SDL_Joystick);

loadLibrary({
    SDL_GetJoysticks: [int32, []],
    SDL_GetJoystickInstanceName: [string, [int32]],
    SDL_OpenJoystick: [SDL_Joystick_ptr, [int32]],
    SDL_GetJoystickFromInstanceID: [SDL_Joystick_ptr, [SDL_JoystickID]],
    SDL_GetJoystickName: [string, [SDL_Joystick_ptr]],
    SDL_GetJoystickInstanceGUID: [SDL_JoystickGUID, [int32]],
    SDL_GetJoystickGUID: [SDL_JoystickGUID, [SDL_Joystick_ptr]],
    SDL_GetJoystickGUIDString: [voit, [SDL_JoystickGUID, string, int32]],
    SDL_GetJoystickGUIDFromString: [SDL_JoystickGUID, [string]],
    SDL_JoystickConnected: [uint32, [SDL_Joystick_ptr]],
    SDL_GetJoystickInstanceID: [SDL_JoystickID, [SDL_Joystick_ptr]],
    SDL_GetNumJoystickAxes: [int32, [SDL_Joystick_ptr]],
    SDL_GetNumJoystickHats: [int32, [SDL_Joystick_ptr]],
    SDL_GetNumJoystickButtons: [int32, [SDL_Joystick_ptr]],
    SDL_UpdateJoysticks: [voit, []],
    SDL_SetJoystickEventsEnabled: [int32, [int32]],
    SDL_GetJoystickAxis: [Sint16, [SDL_Joystick_ptr, int32]],
    SDL_GetJoystickHat: [Uint8, [SDL_Joystick_ptr, int32]],
    SDL_GetJoystickButton: [Uint8, [SDL_Joystick_ptr, int32]],
    SDL_CloseJoystick: [voit, [SDL_Joystick_ptr]],
    SDL_GetJoystickPowerLevel: [int32, [SDL_Joystick_ptr]],
}, SDL);
