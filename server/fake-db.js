const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
            {
                coverImage: './assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1: 'サンプルテキスト１',
                heading2: 'サンプルテキスト２',
                heading3: 'サンプルテキスト３',
                headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
                headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章  テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
                headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
            },
            {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Mini',
            price: 699,
            description: 'A great phone with one of the best cameras',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
            headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章  テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
            headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
            },
            {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Standard',
            price: 299,
            description: '',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
            headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章  テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
            headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
            },
            {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Special',
            price: 999,
            description: '',
            heading1: 'サンプルテキスト１',
            heading2: 'サンプルテキスト２',
            heading3: 'サンプルテキスト３',
            headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
            headingtext2: 'テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章  テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
            headingtext3: 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'
            }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProducts = new Product(product)
                newProducts.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb