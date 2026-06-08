#version 150

uniform sampler2D DiffuseSampler;

uniform vec2 ScreenSize;
uniform vec2 Center;
uniform float Radius;
uniform float EdgeWidth;
uniform float Strength;

in vec2 texCoord;
out vec4 fragColor;

void main() {
    float aspect = ScreenSize.x / ScreenSize.y;

    vec2 deltaUv = texCoord - Center;
    vec2 metric = vec2(deltaUv.x * aspect, deltaUv.y);

    float dist = length(metric);
    vec2 sampleUv = texCoord;

    if (dist > 0.00001) {
        // Strongest at the event-horizon ring.
        float band = 1.0 - clamp(abs(dist - Radius) / EdgeWidth, 0.0, 1.0);
        band = band * band * (3.0 - 2.0 * band);

        vec2 dirMetric = metric / dist;
        vec2 dirUv = vec2(dirMetric.x / aspect, dirMetric.y);

        // Outside the ring bends inward; just inside bends outward.
        float sign = (dist > Radius) ? -1.0 : 1.0;
        sampleUv += dirUv * (sign * Strength * band);
    }

    sampleUv = clamp(sampleUv, vec2(0.0), vec2(1.0));
    fragColor = texture(DiffuseSampler, sampleUv);
}