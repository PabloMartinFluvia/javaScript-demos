export class Test {
    constructor(articleId) {
        this.articleId = articleId;
        this.article = document.getElementById(articleId);
        this.hipotesis = [];
        this.test()
    }

    render() {
        for (let hipotesis of this.hipotesis) {
            hipotesis.addIn(this.article);
        }
    } 
}