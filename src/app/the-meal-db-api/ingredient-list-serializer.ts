export class IngredientListSerializer {
  fromJson(json: any): string {
    return json.strIngredient;
  }
}
