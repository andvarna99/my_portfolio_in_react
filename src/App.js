import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import ExpandingCardsGif from './gifs/expanding_cards.gif';
import ProgressStepsGif from './gifs/progress_steps.gif';
import RotatingNavigationGif from './gifs/rotating_navigation.gif';
import HiddenSearchWidgetGif from './gifs/hidden_search_widget.gif';
import WeatherDashboardGif from './gifs/weather_dashboard.gif';
import BlurryLoadingPageGif from './gifs/blurry_loading_page.gif';


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
                            title="Weather Dashboard"
                            image={WeatherDashboardGif}
                            description="A weather map application that allows users to get a 5-day forecast and current weather specified for a specific location pinned on the map: used Javascript, CSS, and HTML"
                        />
                    </div>
                    <div className="column is-4">
                      <ProfileCard
                          title="Expanding Cards"
                          image={ExpandingCardsGif}
                          description="A simple page that allows users to click on the images to expand the view and see the header appear in the bottom-left corner: used Javascript, CSS, and HTML"
                      />
                    </div>
                    <div className="column is-4">
                      <ProfileCard
                          title="Progress Steps"
                          image={ProgressStepsGif}
                          description="A simple widget that could be used on forms that allows users to click the next and previous buttons to go to the next and previous circles: used Javascript, CSS, and HTML"
                      />
                  </div>
                </div>
                <div class="columns">
                    <div className="column is-4">
                        <ProfileCard
                            title="Rotating Navbar"
                            image={RotatingNavigationGif}
                            description="A page that allows users to get to the navbar by rotating the page and the navigation appears at the bottom-left corner of the screen: used Javascript, CSS, and HTML"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard
                            title="Hidden Search Widget"
                            image={HiddenSearchWidgetGif}
                            description="A super simple widget that allows users to toggle the search icon to have the searchbar expand and collapse: used Javascript, CSS, and HTML"
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard
                            title="Blurry Loading Page"
                            image={BlurryLoadingPageGif}
                            description="When the user refreshed and the page reloads the image becomes clear and the loading percentage becomes transparent: used Javascript, CSS, and HTML"
                        />
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
  );
}

export default App;
