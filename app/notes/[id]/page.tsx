import NoteDetails from "./NoteDetails";
import { NoteDetailsPageProps } from "../../../types/params";


export default function NoteDetailsPage({ params }: NoteDetailsPageProps) {
    return <NoteDetails params={params} />;
}