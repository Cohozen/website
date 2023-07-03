import { Layout } from "./LiveTrack.style.js";

const LiveTrack = () => {
    return (
        <Layout>
            <iframe
                title="liveTrack"
                src={import.meta.env.VITE_URL_LIVETRACK}
                width="100%"
                height="100%"/>
        </Layout>
    )
}

export default LiveTrack;