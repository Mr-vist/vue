/**
 * Created by acer on 2016/2/8.
 */
(function () {
    var vue1 = new Vue({
        el: '.body',
        data: {
            message: 'hello world!',
            selected: 'A',
            book: {id: '', name: ''},
            books: [{
                id: 1,
                name: 'h'
            }, {
                id: 2,
                name: 'w'
            }]
        },
        methods: {
            showDescription: function (data) {
                alert(this.books)
            },
            addBook: function (name) {
                var book = {id: '', name: ''};
                book.id = this.books.length + 1;
                book.name = name;
                this.books.push(book);
            }
        },
        computed: {
            sum: function () {
                var result = 1;
                for (var i = 0; i < 10; i++) {
                    result++;
                }
                return result;
            }
        },
        ready:function(){

        }
    })
})();