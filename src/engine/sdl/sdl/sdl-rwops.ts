import {loadLibrary} from './lib-loader';
import {int32, size_t, string, Uint16, uint32, Uint32, Uint64, Uint8, Uint8_ptr, voit, voit_ptr} from './types';

const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);
const Union = require('ref-union-di')(ref);

const SDL = {} as any;

export const Mem_SDL_Rwops = Struct({
    base: Uint8_ptr,
    here: Uint8_ptr,
    stop: Uint8_ptr,
});

export const Unknown_SDL_Rwops = Struct({
    data1: voit_ptr,
    data2: voit_ptr,
});

export const SDL_RWops_U_SDL_rwops_h_3164 = Union({
    mem: Mem_SDL_Rwops,
    unknown: Unknown_SDL_Rwops
});

export const SDL_RWops = Struct({
    size: voit_ptr,
    seek: voit_ptr,
    read: voit_ptr,
    write: voit_ptr,
    close: voit_ptr,
    type: Uint32,
    hidden: SDL_RWops_U_SDL_rwops_h_3164,
});

export const SDL_RWops_ptr = ref.refType(SDL_RWops);

loadLibrary({
    SDL_RWFromFile: [SDL_RWops_ptr, [string, string]],
    SDL_RWFromMem: [SDL_RWops_ptr, [voit_ptr, int32]],
    SDL_RWFromConstMem: [SDL_RWops_ptr, [voit_ptr, int32]],
    SDL_CreateRW: [SDL_RWops_ptr, []],
    SDL_DestroyRW: [voit, [SDL_RWops_ptr]],
    SDL_ReadU8: [Uint8, [SDL_RWops_ptr]],
    SDL_ReadU16LE: [Uint16, [SDL_RWops_ptr]],
    SDL_ReadU16BE: [Uint16, [SDL_RWops_ptr]],
    SDL_ReadU32LE: [Uint32, [SDL_RWops_ptr]],
    SDL_ReadU32BE: [Uint32, [SDL_RWops_ptr]],
    SDL_ReadU64LE: [Uint64, [SDL_RWops_ptr]],
    SDL_ReadU64BE: [Uint64, [SDL_RWops_ptr]],
    SDL_WriteU8: [size_t, [SDL_RWops_ptr, Uint8]],
    SDL_WriteU16LE: [size_t, [SDL_RWops_ptr, Uint16]],
    SDL_WriteU16BE: [size_t, [SDL_RWops_ptr, Uint16]],
    SDL_WriteU32LE: [size_t, [SDL_RWops_ptr, Uint32]],
    SDL_WriteU32BE: [size_t, [SDL_RWops_ptr, Uint32]],
    SDL_WriteU64LE: [size_t, [SDL_RWops_ptr, Uint64]],
    SDL_WriteU64BE: [size_t, [SDL_RWops_ptr, Uint64]],
}, SDL);
