export class CategoryListSerializer {
  fromJson(json: any): string {
    return json.strCategory;
  }
}
