#version 330

uniform mat4 ModelViewMat;
uniform mat4 ProjMat;
uniform vec2 size;
uniform vec2 scrollOffset;
uniform vec2 scrollSize;
uniform float time;
uniform float zoom;

in vec2 texCoord0;
out vec4 fragColor;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for(int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
}

// Even smaller pentagram
float pentagramThin(vec2 uv) {
    float d = 1e10;
    for(int i = 0; i < 5; i++) {
        float angle = float(i) * 6.283185 / 5.0;
        float nextAngle = float(i + 2) * 6.283185 / 5.0;
        vec2 p1 = vec2(cos(angle), sin(angle)) * 0.18;
        vec2 p2 = vec2(cos(nextAngle), sin(nextAngle)) * 0.18;
        vec2 pa = uv - p1;
        vec2 ba = p2 - p1;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        d = min(d, length(pa - ba * h));
    }
    d = min(d, abs(length(uv) - 0.20));
    return smoothstep(0.008, 0.0, d);
}

// Even smaller rune circle
float runeCircleThin(vec2 uv) {
    float d = 1e10;
    float r = length(uv);
    float a = atan(uv.y, uv.x);
    d = min(d, abs(r - 0.18));
    d = min(d, abs(r - 0.15));
    for(int i = 0; i < 8; i++) {
        float runeAngle = float(i) * 0.785398;
        float da = mod(a - runeAngle + 3.14159, 6.283185) - 3.14159;
        d = min(d, abs(r - 0.165) + abs(da) * 0.5);
        vec2 runePos = vec2(cos(runeAngle), sin(runeAngle)) * 0.165;
        d = min(d, length(uv - runePos) + 0.01);
    }
    d = min(d, abs(uv.x) * 0.9 + abs(uv.y) * 0.1);
    d = min(d, abs(uv.y) * 0.9 + abs(uv.x) * 0.1);
    return smoothstep(0.006, 0.0, d);
}

// Even smaller sigil
float bloodSigilThin(vec2 uv) {
    float d = 1e10;
    d = min(d, abs(length(uv) - 0.07));
    for(int i = 0; i < 5; i++) {
        float angle = float(i) * 1.2566 + 0.3;
        vec2 dir = vec2(cos(angle), sin(angle));
        for(float t = 0.08; t < 0.24; t += 0.02) {
            float curve = sin(t * 10.0 + float(i)) * 0.015;
            vec2 pos = dir * t + vec2(curve, curve * 0.5);
            d = min(d, length(uv - pos));
        }
    }
    d = min(d, abs(uv.x - 0.03) * 0.8 + abs(uv.y + 0.01) * 0.2);
    d = min(d, abs(uv.y - 0.015) * 0.7 + abs(uv.x + 0.006) * 0.3);
    return smoothstep(0.006, 0.0, d);
}

// Even smaller complex geometry
float occultGeometry(vec2 uv) {
    float d = 1e10;
    float r = length(uv);
    d = min(d, abs(r - 0.23));
    d = min(d, abs(r - 0.21));
    vec2 top = vec2(0.0, 0.21);
    vec2 left = vec2(-0.18, -0.13);
    vec2 right = vec2(0.18, -0.13);
    vec2 ba = right - left; vec2 pa = uv - left;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    d = min(d, length(pa - ba * h));
    ba = top - right; pa = uv - right;
    h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    d = min(d, length(pa - ba * h));
    ba = left - top; pa = uv - top;
    h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    d = min(d, length(pa - ba * h));
    d = min(d, abs(uv.x) * 0.95);
    d = min(d, abs(uv.y + 0.05) * 0.9);
    d = min(d, abs(r - 0.13));
    d = min(d, abs(r - 0.09));
    return smoothstep(0.006, 0.0, d);
}

// Even smaller infernal seal
float infernalSeal(vec2 uv) {
    float d = 1e10;
    float r = length(uv);
    d = min(d, abs(r - 0.21));
    d = min(d, abs(r - 0.18));
    d = min(d, abs(r - 0.15));
    for(int i = 0; i < 5; i++) {
        float angle = float(i) * 6.283185 / 5.0 - 1.5708;
        float nextAngle = float(i + 2) * 6.283185 / 5.0 - 1.5708;
        vec2 p1 = vec2(cos(angle), sin(angle)) * 0.14;
        vec2 p2 = vec2(cos(nextAngle), sin(nextAngle)) * 0.14;
        vec2 ba = p2 - p1; vec2 pa = uv - p1;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
        d = min(d, length(pa - ba * h));
    }
    for(int i = 0; i < 12; i++) {
        float runeAngle = float(i) * 0.5236;
        vec2 runePos = vec2(cos(runeAngle), sin(runeAngle)) * 0.19;
        d = min(d, length(uv - runePos) + 0.006);
    }
    return smoothstep(0.005, 0.0, d);
}

float occultSymbol(vec2 uv, int type) {
    if(type == 0) return pentagramThin(uv);
    if(type == 1) return runeCircleThin(uv);
    if(type == 2) return bloodSigilThin(uv);
    if(type == 3) return occultGeometry(uv);
    return infernalSeal(uv);
}

void main() {
    vec2 uv = texCoord0;
    vec2 aspect = vec2(size.x / size.y, 1.0);
    vec2 uvAspect = uv * aspect;
    vec2 center = aspect / 2.0;

    vec2 scrollPos = vec2(0.0);
    if(scrollSize.x > 0.0) scrollPos.x = scrollOffset.x / scrollSize.x;
    if(scrollSize.y > 0.0) scrollPos.y = scrollOffset.y / scrollSize.y;
    float zoomF = zoom / 16.0;
    vec2 vUV = (uvAspect - center) / zoomF + center;

    // Base dark
    vec3 col = vec3(0.012, 0.0, 0.018);

    // FIRST FOG LAYER
    vec2 mistUV1 = vUV * 1.4 + scrollPos * 0.04 + time * 0.02;
    float fog1 = fbm(mistUV1 + vec2(time * 0.04, -time * 0.07)) * 0.35 +
                 fbm(mistUV1 * 1.8 - vec2(0.0, time * 0.1)) * 0.15;
    fog1 *= 0.6;
    col += vec3(0.38, 0.04, 0.07) * fog1 * (1.0 - smoothstep(0.6, 2.0, length(vUV - center)));

    // EVENLY DISTRIBUTED SYMBOLS using grid-based placement
    float totalSymbols = 0.0;
    
    // Use a grid system to ensure even distribution
    // 5x3 grid = 15 positions across the screen
    for(int gx = 0; gx < 5; gx++) {
        for(int gy = 0; gy < 3; gy++) {
            float idx = float(gx * 3 + gy);
            
            // Grid position with slight random offset
            vec2 gridPos = vec2(
                (float(gx) + 0.5) / 5.0 * 1.6 - 0.3,
                (float(gy) + 0.5) / 3.0 * 1.2 - 0.1
            );
            
            // Add small random offset within grid cell
            float offsetX = (hash(vec2(idx, 10.0)) - 0.5) * 0.15;
            float offsetY = (hash(vec2(idx, 11.0)) - 0.5) * 0.12;
            vec2 symPos = gridPos + vec2(offsetX, offsetY);
            
            // Random opacity between 0.3 and 0.7
            float baseOpacity = 0.3 + hash(vec2(idx, 12.0)) * 0.4;
            
            // Random type and size
            int type = int(floor(hash(vec2(idx, 13.0)) * 5.0));
            float scale = 0.6 + hash(vec2(idx, 14.0)) * 0.3;
            
            float dist = length(vUV - symPos);
            float appearTime = hash(vec2(idx, 15.0)) * 6.283;
            float fade = smoothstep(0.1, 0.65, sin(time * 0.3 + appearTime) * 0.5 + 0.5);
            
            // Only render if close to symbol (smaller radius)
            float radius = 0.12;
            float inRange = smoothstep(radius, 0.0, dist);
            
            vec2 localUV = (vUV - symPos) * scale;
            float sym = occultSymbol(localUV, type);
            
            // Apply random opacity and fade
            float finalOpacity = baseOpacity * fade * inRange;
            
            // Symbol line
            col += vec3(0.55, 0.08, 0.12) * sym * finalOpacity * 0.7;
            
            // Subtle bleed/glow
            float bleed = smoothstep(0.04, 0.0, dist) * 0.12;
            col += vec3(0.45, 0.06, 0.10) * bleed * finalOpacity * 0.5;
            
            totalSymbols += finalOpacity;
        }
    }

    // SECOND FOG LAYER
    vec2 mistUV2 = vUV * 2.0 + scrollPos * 0.07 + time * 0.05;
    float fog2 = fbm(mistUV2 + vec2(time * 0.08, -time * 0.12)) * 0.25 +
                 fbm(mistUV2 * 2.5 - vec2(0.0, time * 0.15)) * 0.10;
    fog2 *= 0.5;
    col += vec3(0.52, 0.06, 0.10) * fog2 * (1.0 - smoothstep(0.5, 1.6, length(vUV - center)));

    // Vignette
    float vignette = smoothstep(0.4, 1.4, length(vUV - center));
    col *= 1.0 - vignette * 0.70;
    
    // Subtle grain
    float grain = noise(uv * size * 0.01 + time) * 0.015;
    col += vec3(grain);

    fragColor = vec4(col, 1.0);
}