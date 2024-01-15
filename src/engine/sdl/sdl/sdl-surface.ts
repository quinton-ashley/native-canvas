import {Uint32_ptr, int32, uint32, Uint32, uint32_ptr, Uint8, Uint8_ptr, voit, voit_ptr} from './types';
import {loadLibrary} from './lib-loader';
import {SDL_Palette_ptr, SDL_PixelFormat_ptr} from './sdl-pixels';
import {SDL_Rect, SDL_Rect_ptr} from './sdl-rect';

const FFI = require('ffi-napi');
const ref = require('ref-napi');
const Struct = require('ref-struct-di')(ref);

const SDL = {} as any;

const SDL_Texture = voit;
const SDL_Texture_ptr = ref.refType(SDL_Texture);
const SDL_Renderer = voit;
const SDL_Renderer_ptr = ref.refType(SDL_Renderer);

export const SDL_BlitMap_ptr = ref.refType(voit);
export const SDL_Surface = Struct({
    flags: Uint32,
    format: SDL_PixelFormat_ptr,
    w: int32,
    h: int32,
    pitch: int32,
    pixels: voit_ptr,
    userdata: voit_ptr,
    locked: int32,
    lock_data: voit_ptr,
    clip_rect: SDL_Rect,
    map: SDL_BlitMap_ptr,
    refcount: int32,
});

export const SDL_Surface_ptr = ref.refType(SDL_Surface);
export const SDL_blit = FFI.Function(int32, [SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr]);

export function SDL_CreateSurface(pixels: any, width: number, height: number, depth: number, pitch: number, Rmask: number, Gmask: number, Bmask: number, Amask: number) {
    return SDL.SDL_CreateSurface(pixels, width, height, depth, pitch, Rmask, Gmask, Bmask, Amask);
}

export function SDL_CreateTextureFromSurface(rendererPtr: any, sdlSurfacePtr: any) {
    return SDL.SDL_CreateTextureFromSurface(rendererPtr, sdlSurfacePtr);
}

export function SDL_DestroySurface(surfacePtr: any) {
    SDL.SDL_DestroySurface(surfacePtr);
}

loadLibrary({
    SDL_CreateTextureFromSurface: [SDL_Texture_ptr, [SDL_Renderer_ptr, SDL_Surface_ptr]],
    SDL_CreateSurface: [SDL_Surface_ptr, [Uint32, int32, int32, int32, Uint32, Uint32, Uint32, Uint32]],
    SDL_DestroySurface: [voit, [SDL_Surface_ptr]],
    SDL_SetSurfacePalette: [int32, [SDL_Surface_ptr, SDL_Palette_ptr]],
    SDL_LockSurface: [int32, [SDL_Surface_ptr]],
    SDL_UnlockSurface: [voit, [SDL_Surface_ptr]],
    // SDL_LoadBMP_RW: [SDL_Surface_ptr, [SDL_RWops_ptr, int32]],
    // SDL_SaveBMP_RW: [int32, [SDL_Surface_ptr, SDL_RWops_ptr, int32]],
    SDL_SetSurfaceRLE: [int32, [SDL_Surface_ptr, int32]],
    SDL_SetSurfaceColorKey: [int32, [SDL_Surface_ptr, int32, Uint32]],
    SDL_GetSurfaceColorKey: [int32, [SDL_Surface_ptr, Uint32_ptr]],
    SDL_SetSurfaceColorMod: [int32, [SDL_Surface_ptr, Uint8, Uint8, Uint8]],
    SDL_GetSurfaceColorMod: [int32, [SDL_Surface_ptr, Uint8_ptr, Uint8_ptr, Uint8_ptr]],
    SDL_SetSurfaceAlphaMod: [int32, [SDL_Surface_ptr, Uint8]],
    SDL_GetSurfaceAlphaMod: [int32, [SDL_Surface_ptr, Uint8_ptr]],
    SDL_SetSurfaceBlendMode: [int32, [SDL_Surface_ptr, uint32]],
    SDL_GetSurfaceBlendMode: [int32, [SDL_Surface_ptr, uint32_ptr]],
    SDL_SetSurfaceClipRect: [uint32, [SDL_Surface_ptr, SDL_Rect_ptr]],
    SDL_GetSurfaceClipRect: [voit, [SDL_Surface_ptr, SDL_Rect_ptr]],
    SDL_ConvertSurface: [SDL_Surface_ptr, [SDL_Surface_ptr, SDL_PixelFormat_ptr, Uint32]],
    SDL_ConvertSurfaceFormat: [SDL_Surface_ptr, [SDL_Surface_ptr, Uint32, Uint32]],
    SDL_ConvertPixels: [int32, [int32, int32, Uint32, voit_ptr, int32, Uint32, voit_ptr, int32]],
    SDL_FillSurfaceRect: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, Uint32]],
    SDL_FillSurfaceRects: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, int32, Uint32]],
    SDL_BlitSurface: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr]],
    SDL_BlitSurfaceUnchecked: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr]],
    SDL_SoftStretch: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr]],
    SDL_BlitSurfaceScaled: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr]],
    SDL_BlitSurfaceUncheckedScaled: [int32, [SDL_Surface_ptr, SDL_Rect_ptr, SDL_Surface_ptr, SDL_Rect_ptr]],
}, SDL);
