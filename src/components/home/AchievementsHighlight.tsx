import { Award, Star, TrendingUp, Medal } from "lucide-react";

const achievements = [
    {
        name: "Best Innovation Award",
        description: "National Level Hackathon 2023",
        icon: TrophyIcon,
    },
    {
        name: "Patent Granted",
        description: "Smart Agriculture Device",
        icon: LightbulbIcon,
    },
    {
        name: "Research Publication",
        description: "IEEE International Conference",
        icon: BookOpenIcon,
    },
    {
        name: "Start-up Incubated",
        description: "Eco-friendly Packaging Solution",
        icon: RocketIcon,
    },
];

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Award {...props} className="h-8 w-8 text-yellow-500" />
}
function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Star {...props} className="h-8 w-8 text-yellow-500" />
}
function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
    return <TrendingUp {...props} className="h-8 w-8 text-primary-blue" />
}
function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
    return <Medal {...props} className="h-8 w-8 text-primary-orange" />
}


export function AchievementsHighlight() {
    return (
        <div className="relative z-10 bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Recent Achievements</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Celebrating the milestones of our students and faculty.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((item) => (
                            <div key={item.name} className="flex flex-col bg-white/5 p-8 hover:bg-white/10 transition-colors">
                                <dt className="text-sm font-semibold leading-6 text-gray-300 mt-4">{item.name}</dt>
                                <dd className="order-first flex justify-center">
                                    <item.icon aria-hidden="true" />
                                </dd>
                                <dd className="mt-2 text-sm text-gray-400">{item.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
