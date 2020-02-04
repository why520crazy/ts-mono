module.exports = {
    eslintIntegration: true,
    stylelintIntegration: true,
    tabWidth: 2,
    semi: true,
    printWidth: 140,
    overrides: [
        {
            files: "*.js",
            options: {
                tabWidth: 4
            }
        },
        {
            files: "*.ts",
            options: {
                tabWidth: 4
            }
        }
    ]
};
