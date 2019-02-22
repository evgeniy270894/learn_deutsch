export default {
    state: {
        books: [
            {
                id: 'sgsdfsgwewegwr',
                title: 'Harry Potter und der Stein der Weisen - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                imageId: 'gsdgsdfgsdfgsdfgsdfg',
                level: ['B2', 'C2'],
                rating: 4,
                ratingsCount: 100,
                youtube_playlist_id: 'wgwegwegwergwgfv',
                parts: [
                    {
                        id: 'wegwgegwegew',
                        title: 'Kapitel 1',
                        youtube_id: 'asfasdfafaasdf'
                    },
                    {
                        id: 'wegwgegwegew2',
                        title: 'Kapitel 2',
                        youtube_id: 'asfasdfafaasdf2'
                    },
                    {
                        id: 'wegwgegwegew3',
                        title: 'Kapitel 3',
                        youtube_id: 'asfasdfafaasdf3'
                    },
                    {
                        id: 'wegwgegwegew4',
                        title: 'Kapitel 4',
                        youtube_id: 'asfasdfafaasdf4'
                    }
                ]
            },
            {
                id: 'sewrbwerbwgwewegwr',
                title: 'Harry Potter und der Stein der Weisen - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                imageId: 'gsdgsdfgeerbtsdfgsdfgsdfg',
                level: ['B1', 'B2'],
                rating: 3.5,
                ratingsCount: 60,
                youtube_playlist_id: 'wgjyumyumwegwegwergwgfv',
                parts: [
                    {
                        id: 'wegwgegwegew',
                        title: 'Kapitel 1',
                        youtube_id: 'asfasdfafaasdf'
                    },
                    {
                        id: 'wegwgegwegew2',
                        title: 'Kapitel 2',
                        youtube_id: 'asfasdfafaasdf2'
                    },
                    {
                        id: 'wegwgegwegew3',
                        title: 'Kapitel 3',
                        youtube_id: 'asfasdfafaasdf3'
                    },
                    {
                        id: 'wegwgegwegew4',
                        title: 'Kapitel 4',
                        youtube_id: 'asfasdfafaasdf4'
                    }
                ]
            },
            {
                id: 'sgcxbfgnrngwewegwr',
                title: 'Harry Potter und der Stein der Weisen - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                imageId: 'gsdgsdjmyumyufgsdfgsdfgsdfg',
                parts: 7,
                level: ['A2'],
                ratingsCount: 43,
                youtube_playlist_id: 'wgwegwevsdvsdfvgwergwgfv',
                parts: [
                    {
                        id: 'wegwgegwegew',
                        title: 'Kapitel 1',
                        youtube_id: 'asfasdfafaasdf'
                    },
                    {
                        id: 'wegwgegwegew2',
                        title: 'Kapitel 2',
                        youtube_id: 'asfasdfafaasdf2'
                    },
                    {
                        id: 'wegwgegwegew3',
                        title: 'Kapitel 3',
                        youtube_id: 'asfasdfafaasdf3'
                    },
                    {
                        id: 'wegwgegwegew4',
                        title: 'Kapitel 4',
                        youtube_id: 'asfasdfafaasdf4'
                    }
                ]
            }
        ]
    },
    mutations: {},

    getters: {
        getBooks: (state) => state.books,
        getParts: (state) => state.booksParts,

    }
}
