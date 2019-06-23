export default {
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    immer: true
                },
                title: 'moviemanager - Find your interest!'
            }
        ],
    ],
};