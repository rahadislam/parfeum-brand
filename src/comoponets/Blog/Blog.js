import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-5 w-1/2'>
            <span className='font-extrabold text-xl'>Q:</span><span className='font-medium text-xl'>What is context api?</span>
            <p><span className='font-extrabold text-xl'>Ans:</span><span className='font-blod text-xl'>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how  passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size you can easily go with Context API and be fine with it.</span></p>
            <br />

            <p><span className='font-extrabold text-xl'>Q:</span><span className='font-medium text-xl'>what is semantic tag?</span></p>
            <p><span className='font-extrabold text-xl'>Ans:</span><span className='font-blod text-xl'>Semantic tags clearly define the purpose of the HTML element. It also describes the type of content that the element example:header, footer, article</span></p>
            <br />
            <p><span className='font-extrabold text-xl'>Q:</span><span className='font-medium text-xl'>Block inline and inline-block elements different?</span></p>
            <p><span className='font-extrabold text-xl'>Ans:</span><span className='font-blod text-xl'>Inline:Inline elements display in a line. They do not force the text after them to a new line.An anchor tag is an example of an inline element. You can put several links in a row, and they will display in a line.
            The p element is an example of a block level element. new paragraph tag will appear on its own line vertically. Paragraphs with longer content will stretch all the way to the edge of the page.</span></p>
        </div>
    );
};

export default Blog;