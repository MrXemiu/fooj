export class AreaListSerializer {
  fromJson(json: any): string {
    return json.strArea;
  }
}
