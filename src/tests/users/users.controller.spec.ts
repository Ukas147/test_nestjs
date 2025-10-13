import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../../modules/users/users.controller';
import { UsersService } from '../../modules/users/users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findAllUsers: jest.fn(),
            findUserById: jest.fn(),
            createUser: jest.fn(),
            deleteUser: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllUsers', () => {
    it('should return an array of users', async () => {
      const mockUsers = [
        { id: 1, email: 'test@test.com', name: 'Test User', createdAt: new Date() },
      ];
      
      jest.spyOn(service, 'findAllUsers').mockResolvedValue(mockUsers);

      const result = await controller.findAllUsers();
      expect(result).toEqual(mockUsers);
    });
  });

  describe('findUserById', () => {
    it('should return a user by id', async () => {
      const mockUser = { id: 1, email: 'test@test.com', name: 'Test User', createdAt: new Date() };
      
      jest.spyOn(service, 'findUserById').mockResolvedValue(mockUser);

      const result = await controller.findUserById(1);
      expect(result).toEqual(mockUser);
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = { id: 1, email: 'test@test.com', name: 'Test User', createdAt: new Date() };
      
      jest.spyOn(service, 'createUser').mockResolvedValue(mockUser);

      const result = await controller.createUser(mockUser);
      expect(result).toEqual(mockUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const mockUser = { id: 1, email: 'test@test.com', name: 'Test User', createdAt: new Date() };
      
      jest.spyOn(service, 'deleteUser').mockResolvedValue(mockUser);

      const result = await controller.deleteUser(1);
      expect(result).toEqual(mockUser);
    });
  });
});