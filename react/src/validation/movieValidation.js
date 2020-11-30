import * as Yup from 'yup';

export const initialValues = (props) => {
    return {
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        genre: props.genre,
        times_viewed: props.times_viewed,
        comments: props.comments,
        user: props.user_id
    }
}
export const validationSchema = Yup.object({
    title: Yup.string()
    .required('Required'),
    description: Yup.string()
    .required('Required'),
    image: Yup.string()
    .required('Required'),
    genre: Yup.number() 
    .min(1, 'Required')
    .required('Required'),
})