import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TheMealDbApiService } from './the-meal-db-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const dummyMeals = {
  meals: [
    {
      idMeal: '52771',
      strMeal: 'Spicy Arrabiata Penne',
      strDrinkAlternate: null,
      strCategory: 'Vegetarian',
      strArea: 'Italian',
      strInstructions:
        // tslint:disable-next-line:max-line-length
        'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
      strMealThumb:
        'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      strTags: 'Pasta,Curry',
      strYoutube: 'https://www.youtube.com/watch?v=1IszT_guI08',
      strIngredient1: 'penne rigate',
      strIngredient2: 'olive oil',
      strIngredient3: 'garlic',
      strIngredient4: 'chopped tomatoes',
      strIngredient5: 'red chile flakes',
      strIngredient6: 'italian seasoning',
      strIngredient7: 'basil',
      strIngredient8: 'Parmigiano-Reggiano',
      strIngredient9: '',
      strIngredient10: '',
      strIngredient11: '',
      strIngredient12: '',
      strIngredient13: '',
      strIngredient14: '',
      strIngredient15: '',
      strIngredient16: null,
      strIngredient17: null,
      strIngredient18: null,
      strIngredient19: null,
      strIngredient20: null,
      strMeasure1: '1 pound',
      strMeasure2: '1/4 cup',
      strMeasure3: '3 cloves',
      strMeasure4: '1 tin ',
      strMeasure5: '1/2 teaspoon',
      strMeasure6: '1/2 teaspoon',
      strMeasure7: '6 leaves',
      strMeasure8: 'spinkling',
      strMeasure9: '',
      strMeasure10: '',
      strMeasure11: '',
      strMeasure12: '',
      strMeasure13: '',
      strMeasure14: '',
      strMeasure15: '',
      strMeasure16: null,
      strMeasure17: null,
      strMeasure18: null,
      strMeasure19: null,
      strMeasure20: null,
      strSource: null,
      dateModified: null
    }
  ]
};
const dummyMeal = dummyMeals.meals[0];
const dummyCategoriesList = {
  meals: [
    {
      strCategory: 'Beef'
    }
  ]
};
const dummyAreasList = {
  meals: [
    {
      strArea: 'American'
    }
  ]
};
const dummyIngredientsList = {
  meals: [
    {
      idIngredient: '1',
      strIngredient: 'Chicken',
      strDescription: null,
      strType: null
    }
  ]
};

describe('TheMealDbApiService', () => {
  let injector: TestBed;
  let service: TheMealDbApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientModule, HttpClient, TheMealDbApiService]
    });
    injector = getTestBed();
    service = injector.get(TheMealDbApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    service = TestBed.get(TheMealDbApiService);
    expect(service).toBeTruthy();
  });

  describe('#getMealByName', () => {
    it('should return an Observable<Meal[]>', () => {
      const mealName = dummyMeal.strMeal;
      service.getMealByName(mealName).subscribe(meals => {
        expect(meals).toBeTruthy();
        expect(meals[0]).toEqual(dummyMeal);
      });

      const req = httpMock.expectOne(
        `${service.apibase}/${service.apiEndPoints.getMealByName}=${mealName}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyMeals);
    });
  });

  describe('#getMealById', () => {
    it('should return an Observable<Meal>', () => {
      const mealId = Number(dummyMeal.idMeal);
      service.getMealById(mealId).subscribe(meals => {
        expect(meals).toBeTruthy();
        expect(meals).toEqual(dummyMeal);
      });

      const req = httpMock.expectOne(
        `${service.apibase}/${service.apiEndPoints.getMealById}=${mealId}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyMeals);
    });
  });

  describe('#getRandomMeal', () => {
    it('should return an Observable<Meal>', () => {
      service.getRandomMeal().subscribe(meals => {
        expect(meals).toBeTruthy();
        expect(meals).toEqual(dummyMeal);
      });

      const req = httpMock.expectOne(
        `${service.apibase}/${service.apiEndPoints.getRandomMeal}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(dummyMeals);
    });
  });

  /*
   * In a real application there would be unit tests for every service,
   * and they would be more comprehensive, but I have to draw a line for the sake of time.
   */
});
