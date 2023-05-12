import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import ExpandingCardsGif from './gifs/expanding_cards.gif';
import ProgressStepsGif from './gifs/progress_steps.gif';
import RotatingNavigationGif from './gifs/rotating_navigation.gif';
import HiddenSearchWidget from './gifs/hidden_search_widget.gif';

const description1  = [
    "used Javascript, CSS, and HTML",
    "cards will display small on the screen with a background image when not clicked",
    "cards will expand and a heading will appear with a css transition when clicked on"
]

function App(){
  return(
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">My Javascript Projects</p>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="rows">
                <div className="columns">
                    <div className="column is-4">
                      <ProfileCard
                          title="Project 1: Expanding Cards"
                          image={ExpandingCardsGif}
                          description={description1}
                      />
                    </div>
                    <div className="column is-4">
                      <ProfileCard
                          title="Project 2: Progress Steps"
                          image={ProgressStepsGif}
                          description="- used Javascript, CSS, and HTML
      - clicking the next button transitions the circles to the next number
      - when we get to the last one the next button becomes disabled
      - when we get to the first one the previous button becomes disabled"
                      />
                  </div>
                    <div className="column is-4">
                        <ProfileCard
                            title="Project 3: Rotating Navbar"
                            image={RotatingNavigationGif}
                            description="- used Javascript, CSS, and HTML
- once you click on the navigation icon, the page rotates and the navigation appears at the bottom of the page
- the icon also changes to a close button once the navigation appears"
                        />
                    </div>
                </div>
              <div className="column is-4">
                <ProfileCard
                    title="Project 4: Hidden Search Widget"
                    image={HiddenSearchWidget}
                    description="- used Javascript, CSS, and HTML
- when you toggle the search icon the search field expands and collapses"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}

export default App;
