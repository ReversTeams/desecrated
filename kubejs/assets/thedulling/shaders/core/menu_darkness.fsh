#version 150

uniform vec2 ScreenSize;
uniform vec2 LightPos;
uniform float InnerRadius;
uniform float OuterRadius;
uniform float OverlayAlpha;

out vec4 fragColor;

void main() {
	float dist = distance(gl_FragCoord.xy, LightPos);

	// 0.0 inside the bright center, 1.0 out in the darkness.
	float darkness = smoothstep(InnerRadius, OuterRadius, dist);

	fragColor = vec4(0.0, 0.0, 0.0, OverlayAlpha * darkness);
}