import { csrfFetch } from './csrf';

const LOAD_Images = "LOAD_IMAGES"
const ADD_Images = "ADD_IMAGES"
const DELETE_Images = "DELETE_IMAGESS"

const Get_Image_Action = (images) => ({
    type: LOAD_Images,
    images

})

const Create_Image_Action = (image) => ({
    type: ADD_Images,
    image
})


const Delete_Image_Action = (id) => ({
    type: DELETE_Images,
    id
})

//get spot images

export const getImages = () => async (dispatch) => {
    const response = await csrfFetch('/api/images')
    if (response.ok) {
        const images = await response.json()

        dispatch(Get_Image_Action(images))
    }
}

// // get bookings by current user
// export const GetUserBooking = () => async (dispatch) => {
//     const response = await csrfFetch('/api/bookings/current')
//     if (response.ok) {
//         const bookings = await response.json()
//         dispatch(Get_Booking_Action(bookings))
//     }
// }


// // get bookings by spot
// export const GetSpotBooking = (spotId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}/bookings`)
//     if (response.ok) {
//         const result = await response.json()
//         dispatch(Get_Booking_Action(result.bookings))
//     }
// }

// //create a new booking
// export const CreateBooking = (spotId, booking) => async (dispatch) => {

//     const response = await csrfFetch(`/api/spots/${spotId}/bookings`, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(booking)
//     })
    
//     if (response.ok) {
//         const newBooking = await response.json()
//         dispatch(Create_Booking_Action(newBooking))
//     }
// }

// //edit a booking 
// export const EditBooking = (bookingId, booking) => async (dispatch) => {
//     const response = await csrfFetch(`/api/bookings/${bookingId}`, {
//         method: "PUT",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(booking)
//     })

//     if (response.ok) {
//         const booking = await response.json()
//         dispatch(Edit_Booking_Action(bookingId, booking))
//     }
// }

// //delete a booking 
// export const DeleteBooking = (bookingId) => async (dispatch) => {
//     const response = await csrfFetch(`/api/bookings/${bookingId}`, {
//         method: "DELETE"
//     })
//     if (response.ok) {
//         dispatch(Delete_Booking_Action(bookingId))

//     }
// }

const initialState = {}

const imageReducer = (state = initialState, action) => {
    let newState ={}
    switch (action.type) {
        case LOAD_Images:{
            action.images.forEach(image => {
                newState[image.id] = image
            });
            return newState
        }
//         case CREATE_Bookings: {
//             newState = { ...state }
//             newState[action.booking.id] = action.booking
//             return newState
//         }
//         case EDIT_Bookings: {
//             newState = {...state}
//             newState[action.bookingId] = action.booking
//             return newState
//         }
//         case DELETE_Bookings: {
//             newState = {...state}
//             delete newState[action.id]
//             return newState
//         }

        default:
            return state
    }
}

export default imageReducer