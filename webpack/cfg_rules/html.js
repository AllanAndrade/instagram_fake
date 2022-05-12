const path = require('path');


module.exports = { // HTML
    // HTML LOADER
    // Super important: We need to test for the html
    // as well as the nunjucks files
    test: /\.html$/,
    use: [
        {
            loader: 'html-loader',
            options: {
                sources: true,
            },
        },
        {
            loader: 'nunjucks-html-loader',
            options: {
                // Other super important. This will be the base
                // directory in which webpack is going to find
                // the layout and any other file index.njk is calling.
                //  searchPaths: [...returnEntries('./src/pages/**/')]
                // Use the one below if you want to use a single path.
                
                searchPaths: [path.resolve(__dirname, '../../')] // Define a base url que deve ser o root do projeto em relação ao diretório em que está o ESTE ARQUIVO (HTML.JS)
                /*context: {
                    gk_hash: hash
                }*/
            }
        },
        {
            // Geko Html Loader
            loader: 'geko-html-loader',
        }
    ]
}