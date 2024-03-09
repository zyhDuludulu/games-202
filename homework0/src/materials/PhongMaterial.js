class PhongMaterial extends Material {
	/**
	 * Creates an instance of PhongMaterial.
	 * @param {vec3f} color The color of the material
	 * @param {texture} colorMap The texutre object of the meterial
	 * @param {vec3f} specular The specular color of the material
	 * @param {float} intensity The intensity of the light
	 * @menberof PhongMaterial
	 */
	constructor(color, colorMap, specular, intensity) {
		let textureSample = 0;
		if (colorMap != null) {
			textureSample = 1;
			super({
				'uTextureSample': { type: '1i', value: textureSample },
				'uSampler': { type: 'texture', value: colorMap },
				'uKd': { type: '3fv', value: color },
				'uKs': { type: '3fv', value: specular },
				'uLightIntensity': { type: '1f', value: intensity }
			}, [], PhongVertexShader, PhongFragmentShader);
		} else {
			super({
				'uTextureSample': { type: '1i', value: textureSample },
				'uKd': { type: '3fv', value: color },
				'uKs': { type: '3fv', value: specular },
				'uLightIntensity': { type: '1f', value: intensity }
			}, [], PhongVertexShader, PhongFragmentShader);
		}
	}
}