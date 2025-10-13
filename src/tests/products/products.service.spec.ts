import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../../modules/products/products.service';
import { ProductsRepository } from '../../modules/products/products.repository';

describe('ProductsService', () => {
  let service: ProductsService;
  let repository: ProductsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: ProductsRepository,
          useValue: {
            findAllProducts: jest.fn(),
            findProductById: jest.fn(),
            createProduct: jest.fn(),
            softDeleteProduct: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repository = module.get<ProductsRepository>(ProductsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllProducts', () => {
    it('should return an array of products', async () => {
      const mockProducts = [
        {
          id: 1,
          name: 'Product 1',
          priceCents: 100,
          quantity: 10,
          isActive: true,
          createdAt: new Date(),
        },
      ];

      jest.spyOn(repository, 'findAllProducts').mockResolvedValue(mockProducts);

      const result = await service.findAllProducts();
      expect(result).toEqual(mockProducts);
    });
  });

  describe('findProductById', () => {
    it('should return a product by id', async () => {
      const mockProduct = {
        id: 1,
        name: 'Product 1',
        priceCents: 100,
        quantity: 10,
        isActive: true,
        createdAt: new Date(),
      };

      jest.spyOn(repository, 'findProductById').mockResolvedValue(mockProduct);

      const result = await service.findProductById(1);
      expect(result).toEqual(mockProduct);
    });
  });

  describe('createProduct', () => {
    it('should create a product', async () => {
      const mockProduct = {
        id: 1,
        name: 'Product 1',
        priceCents: 100,
        quantity: 10,
        isActive: true,
        createdAt: new Date(),
      };

      jest.spyOn(repository, 'createProduct').mockResolvedValue(mockProduct);

      const result = await service.createProduct(mockProduct);
      expect(result).toEqual(mockProduct);
    });
  });

  describe('softDeleteProduct', () => {
    it('should soft delete a product', async () => {
      const mockProduct = {
        id: 1,
        name: 'Product 1',
        priceCents: 100,
        quantity: 10,
        isActive: true,
        createdAt: new Date(),
      };

      jest
        .spyOn(repository, 'softDeleteProduct')
        .mockResolvedValue(mockProduct);

      const result = await service.softDeleteProduct(1);
      expect(result).toEqual(mockProduct);
    });
  });
});
