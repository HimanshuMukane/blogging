import pluginRss from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
    // Copy static assets
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/css");
    
    // Watch CSS files for changes
    eleventyConfig.addWatchTarget("src/css/");
    
    // Add RSS plugin
    eleventyConfig.addPlugin(pluginRss);
    
    // Add date filters
    eleventyConfig.addFilter("dateIso", date => {
        return date.toISOString();
    });
    
    eleventyConfig.addFilter("dateReadable", date => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });
    
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
} 