import React, { useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
// import useHookApi from '../../hooks//useHookApi';
import axios from "axios";

// export enum ServicesLanguage {
//     fetchListPost = "/posts",
//     fetchOnePost = "/posts",
//     createOnePost = "/posts",
// }

// interface Post {
//     userId: string,
//     id: string,
//     title: string,
//     body: string
// }
const HomePage = () => {
    // const { stateFetchList: stateFetchPost, stateCreateOne: stateCreatePost, getList: getListPost, createOne: createOnePost } = useHookApi<Post>();

    const getData = async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res)
            })
    }

    useEffect(() => {
        getData()
    }, []);

    // if (stateFetchPost.isPending) {
    //     return <h1>..Loading</h1>
    // }
    // const onSubmitForm = async (item: Post) => {
    //     await createOnePost(ServicesLanguage.createOnePost, item)
    //     if (stateCreatePost.isSuccess) {
    //         alert('OK')
    //     }
    // }
    return (
        <>
            <MainLayout>
                {/* {stateFetchPost.isPending && 'Loading.....'}
                {stateFetchPost.data && stateFetchPost.data?.map((item, index) => {
                    return <div
                        key={index}>

                        <button onClick={() => onSubmitForm(item)}>{item.id}</button>
                    </div>
                })} */}
            </MainLayout>
        </>
    )
};

export default HomePage;