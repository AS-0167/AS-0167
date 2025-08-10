import { AiOutlineFire } from 'react-icons/ai';
import GitHubCalendar from 'react-github-calendar';


type GitHubActivityCardProps = {
  username: string;
};

const GitHubActivityCard = ({ username }: GitHubActivityCardProps) => {
  return (
    <div className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body p-8">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
            <AiOutlineFire className="text-2xl text-primary" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
              GitHub Contribution Activity
            </h3>
            <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
              @{username}
            </div>
          </div>
        </div>

        {/* Activity Chart */}
        <div className="flex justify-center">
            {/* <img
                src={`https://ghchart.rshah.org/0167FF/${username}`}
                alt={`GitHub activity graph for ${username}`}
                className="w-full h-auto rounded-lg bg-base-100 p-2"
            /> */}
            {/* <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark`}
            alt={`${username}'s GitHub streak`}
            className="w-full h-auto rounded-lg"
            /> */}
            {/* <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=ffffff&color=0167FF&line=0167FF&point=0167FF&area=true&hide_border=true`}
            alt="GitHub Activity Graph"
            className="w-full h-auto rounded-lg"
            /> */}
        
            <GitHubCalendar username='AS-0167' />
            {/* <iframe
            src={`https://github.com/users/${username}/contributions`}
            width="100%"
            height="200"
            frameBorder="0"
            className="rounded-lg"
            /> */}

        </div>
        
        
      </div>
    </div>
  );
};

export default GitHubActivityCard;
