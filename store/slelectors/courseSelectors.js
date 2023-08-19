import { selector } from "recoil";
import { courseState } from "../atoms/course";

export const courseTitle = selector({
    key: "courseTitle",
    get: ({get})=>{
        const state = get(courseState);
       if(state.course){
        return state.course.title;
       }
       return "";
    }
})

export const courseDescription = selector({
    key: "courseDescription",
    get: ({get})=>{
        const state = get(courseState);
       if(state.course){
        return state.course.description;
       }
       return "";
    }
})

export const isCourseLoading = selector({
    key: "isCourseLoading",
    get: ({get})=>{
        const state = get(courseState);

        return state.isLoading;
    }
})

export const courseDetail = selector({
    key: "courseDetail",
    get: ({get})=>{
        const state = get(courseState);

        return state.course;
    }
})

export const courseImage = selector({
    key: "courseImage",
    get: ({get})=>{
        const state = get(courseState);
     if(state.course){
        return state.course.imageLink;
     }
    }
})