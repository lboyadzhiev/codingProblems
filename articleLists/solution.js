/**
 *In this problem, you should create a JS functionality which creates articles and appends them into some article section.
The programs in this language are called scripts. They can be written right in the HTML and executed automatically as the page loads.
Scripts are provided and executed as a plain text. They don't need a special preparation or a compilation to run.
In this aspect, JavaScript is very different from another language called Java.
 *Constraints:
    • Title value from the title input should be a heading 3 element <h3>
    • Content text from the textarea element should be a paragraph <p>
    • Both new created elements (h3 and p) should be appended to a new article element <article>
    • The current article element should be appended to the section which has an id articles (#articles)
    • You should create new article element only if title and content are not empty
    • After the button is pressed you must clear the title value and text value 
 */

function createElement(type, content) {
    let e = document.createElement(type);
    if (typeof content === 'string') {
        e.innerHTML = content;
    }

    if (typeof content === 'object') {
        e.appendChild(content);
    }

    return e;
}

function createArticle(callback, titleValue, contentValue) {
    if (titleValue !== '' && contentValue !== '') {
        callback(createElement('h3', titleValue));
        callback(createElement('p', contentValue));
    }
}

function clickHandler(callback, titleInput, contentInput) {
    createArticle(callback, titleInput.value, contentInput.value);
}

function addToHTML(parent, child) {
    parent.appendChild(child);
}

function main() {
    let action = document.getElementById('clickBtn');
    let items = document.getElementById('articles');
    let titleInput = document.getElementById('createTitle');
    let contentInput = document.getElementById('createContent');

    if (action === null || items === null || titleInput === null || contentInput === null) {
        throw new Error('Missing dom elements');
    }

    const boundClickHandler = clickHandler.bind(
        undefined,
        addToHTML.bind(undefined, items),
        titleInput,
        contentInput
    );
    action.addEventListener('click', boundClickHandler);
}

document.addEventListener('DOMContentLoaded', main);
