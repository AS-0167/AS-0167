import { AiOutlineFire } from 'react-icons/ai';
import GitHubCalendar from 'react-github-calendar';


type GitHubActivityCardProps = {
  username: string;
};
const pinkTheme = {
  dark: [
    "#fde4ec", // no activity
    "#f8bbd0", // low activity
    "#f48fb1", // medium-low
    "#f06292", // medium-high
    "#ec407a"  // high activity
  ],
  light: [
    "#4a0033", // no activity
    "#800046", // low activity
    "#b30059", // medium-low
    "#e60073", // medium-high
    "#ff3385"  // high activity
  ]
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
          <div className="card shadow-md card-sm bg-base-100" >
            <div className="p-8 h-full w-full">
              <div className="flex items-center flex-col">
                <div className="w-full">
                  <div className="flex items-start px-4">
                    <div className="w-full">
                      <GitHubCalendar 
                        username="AS-0167"
                        theme={pinkTheme} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubActivityCard;
