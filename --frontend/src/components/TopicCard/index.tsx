import TopicCardActions from "../TopicCardActions";
import TopicCardBody from "../TopicCardBody";
import TopicCardHeader from "../TopicCardHeader";

type TopicCardProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    topic: any
}

function TopicCard({topic}: TopicCardProps) {
    return (
        <div id="topic-card">
            <TopicCardHeader />
            <TopicCardBody />
            <TopicCardActions />
        </div>
    )
}

export default TopicCard;