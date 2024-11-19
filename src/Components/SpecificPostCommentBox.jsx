import { observer, useLocalObservable } from "mobx-react";
import InputBox from "./FormControls/InputBox";
import { useEffect } from "react";
import Button from "./FormControls/Button";
import { supabase } from "../supabase";
import Loading from "./Loading";

const SpecificPostCommentBox = observer(({referenceid, addNote, addComment}) => {
    const state = useLocalObservable(()=>({
        commentData: "",
        setCommentData: value => state.commentData = value,
        isPostingComment: false,
        setPostingComment: value => state.isPostingComment = value
    }))

    const sendComment = async() => {
        if(state.commentData.length === 0 ){
            addNote("Cannot add empty text!", "error")
            return
        }
        if(state.commentData.trim().length > 512 ){
            addNote("Support contains more than 512 characters!", "error")
            return
        }
        state.setPostingComment(true)
        const {data, error} = await supabase.rpc("new_comment",{
            'referenceid': referenceid,
            'comment_data': state.commentData.trim()
        })
        if(error){
            if(error.code === '42501'){
                addNote('To protect the platform we limit the user requests on hour basis, you can try again later after an hour!', 'error')
            } else {
                addNote('Could not post the support, try again soon!', 'error');
            }
        } else {
            if(data.status === "ok"){
                addComment({
                    data: state.commentData,
                    created_date: new Date().toISOString()
                })
                state.setCommentData('')
                addNote('Support posted successfully.', 'success');
            } else {
                addNote('Something went wrong, try again soon!', 'error');
            }
        }
        state.setPostingComment(false)
    }

    return(
    <div className="w-full">
        <details>
            <summary className="p-5 font-hand border-y border-zinc-800 dark:border-white">Assistance from Authorities</summary>
            <form className="flex flex-col p-3" onSubmit={e => {
                e.preventDefault();
                sendComment()
            }}>
                <InputBox mainElementMargin={'my-2'} labelName={"Support & Guidance:"} fontFamily="font-mono" required={true} multiLine={true} maxLength={512} stateVariable={state.commentData} updateData={state.setCommentData} rows={2} />
                <Button
                    disabled={state.isPostingComment}
                    text={<>{state.isPostingComment ? <Loading /> : []}Post Support</>}
                    />
            </form>
        </details>
    </div>
    )
})

export default SpecificPostCommentBox;
