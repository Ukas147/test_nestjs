import { Test, TestingModule } from '@nestjs/testing';
import {ProductsController} from '../../modules/products/products.controller';
import {ProductsService} from '../../modules/products/products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            findAllProducts: jest.fn(),
            findProductById: jest.fn(),
            createProduct: jest.fn(),
            softDeleteProduct: jest.fn(),
          }
        }
      ]
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  
  describe('findAllProducts', () => {
    it('should return an array of products', async () => {
      const mockProducts = [
        { id: 1, name: 'Product 1', priceCents: 100, quantity: 10, isActive: true, createdAt: new Date() },
      ];
    })
  })

  describe('findProductById', () => {
    it('should return a product by id', async () => {
      const mockProduct = { id: 1, name: 'Product 1', priceCents: 100, quantity: 10, isActive: true, createdAt: new Date() };
      
      jest.spyOn(service, 'findProductById').mockResolvedValue(mockProduct);
      
    })
  })

  describe('createProduct', () => {
    it('should create a product', async () => {
      const mockProduct = { id: 1, name: 'Product 1', priceCents: 100, quantity: 10, isActive: true, createdAt: new Date() };
      
      jest.spyOn(service, 'createProduct').mockResolvedValue(mockProduct);
      
    })
  })

  describe('softDeleteProduct', () => {
    it('should soft delete a product', async () => {
      const mockProduct = { id: 1, name: 'Product 1', priceCents: 100, quantity: 10, isActive: true, createdAt: new Date() };
      
      jest.spyOn(service, 'softDeleteProduct').mockResolvedValue(mockProduct);
      
    })
  })
});