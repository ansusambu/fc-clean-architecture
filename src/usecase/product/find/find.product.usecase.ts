import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputFindProductDto, OutputFindProductDto } from "./find.product.dto";

export default class FindProductUseCase {
  private pruductRepository: ProductRepositoryInterface;

  constructor(pruductRepository: ProductRepositoryInterface) {
    this.pruductRepository = pruductRepository;
  }

  async execute(input: InputFindProductDto): Promise<OutputFindProductDto> {
    const product = await this.pruductRepository.find(input.id);

    return {
      id: product.id,
      name: product.name,
      price: product.price
    }
  }
}