module.exports = {
	ci: {
		healthcheck: {
			fatal: true,
			checks: ['githubToken'],
		},
		collect: {
			startServerCommand: 'node server.js',
			numberOfRuns: 5,
			settings: {
				formFactor: 'mobile',
			},
		},
		upload: {
			target: 'filesystem',
			outputDir: '/tmp/lighthouseci',
		},
		assert: {
			assertions: {
				'categories:performance': ['error', { minScore: 0.8 }],
				'categories:accessibility': ['error', { minScore: 0.8 }],
				'categories:best-practices': ['error', { minScore: 0.8 }],
				'categories:seo': ['error', { minScore: 0.8 }],
			},
		},
	},
};
