export default {
    state: {
        books: [
            {
                id: 'sgsdfsgwewegwr',
                title: 'Harry Potter und der Stein der Weisen - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: 'gsdgsdfgsdfgsdfgsdfg',
                parts: 7,
                level: ['B2', 'C2'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'wgwegwegwergwgfv'
            },
            {
                id: 'sewrbwerbwgwewegwr',
                title: 'Harry Potter und der Stein der Weisen - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: 'gsdgsdfgeerbtsdfgsdfgsdfg',
                parts: 7,
                level: ['B1', 'B2'],
                rating: 3.5,
                ratingsCount: 60,
                youtube_playlist_id: 'wgjyumyumwegwegwergwgfv'
            },
            {
                id: 'sgcxbfgnrngwewegwr',
                title: 'Harry Potter und der Stein der Weisen - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: 'gsdgsdjmyumyufgsdfgsdfgsdfg',
                parts: 7,
                level: ['A2'],
                rating: 2,
                ratingsCount: 43,
                youtube_playlist_id: 'wgwegwevsdvsdfvgwergwgfv'
            }
        ]
    },
    mutations: {},

    getters: {
        getBooks: (state) => state.books

    }
}
