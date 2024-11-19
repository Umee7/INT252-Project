import { useEffect } from "react";
import Question from "./Question";

const questionsData =[
    {
        'id': '1',
        'q': 'How can I report a safety concern or threat on this platform?',
        'a': ['To report a concern, go to the "New Report" section. Select your country and category, describe the issue, and optionally include your city or nearest landmark to help authorities guide you better. You can also attach files like images or videos to provide additional context.']
    },
    {
        'id': '2',
        'q': 'Will my identity remain private when I submit a report?',
        'a': ['Yes, your identity remains completely private. Your name is optional, and no personal data like contact numbers or addresses are required. Only the reports content, country, and category will be visible to others and the authorities.']
    },
    {
        'id': '3',
        'q': 'How can I receive support after submitting a report?',
        'a' : ['Authorities can respond directly under your report by providing a case ID, instructions, and the address of the nearest police station or relevant location. Follow their guidance to get help without needing to explain your case repeatedly.']
    },
    {
        'id': '4',
        'q': 'Can I edit or delete my report after submitting it?',
        'a': ['No, reports cannot be edited or deleted once submitted. This ensures that all reports remain consistent and helps authorities track the data accurately.']
    },
    {
        'id': '5',
        'q': 'What should I do in case of an emergency?',
        'a': ["In case of an emergency, always call the appropriate helplines. In India, use the following: Women's Helpline: 1091, Police Emergency: 100, SOS (Womens Safety App): 112, Childline (For minors): 1098. In other countries, dial the emergency number for assistance, such as 911 (US) or 999 (UK). Stay calm, provide your location clearly, and follow the instructions given."]
    }
]

const Questions = () => {
    useEffect(()=>{
        document.title = "FAQs"
    },[])

    return(
        <div className="p-2 py-5">
            <h2 className="text-3xl font-bold my-5 text-center">FAQs</h2>
            <div className="p-5">
                {questionsData.map(qa => <Question question={qa.q} answer={qa.a} key={qa.id} />)}
            </div>
        </div>
    )
}

export default Questions;
