module.exports = {
	ci: {
		healthcheck: {
			fatal: true,
			checks: ['githubToken'],
		},
		collect: {
			numberOfRuns: 5,
			startServerCommand: 'node server.js',
			settings: {
				formFactor: 'desktop',
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
