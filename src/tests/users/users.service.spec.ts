import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../modules/users/users.service';
import { UsersRepository } from '../../modules/users/users.repository';

describe('UsersService', () => {
  let service: UsersService;
  let repository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: {
            findAllUsers: jest.fn(),
            findUserById: jest.fn(),
            createUser: jest.fn(),
            deleteUser: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<UsersRepository>(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllUsers', () => {
    it('should return an array of users', async () => {
      const mockUsers = [
        {
          id: 1,
          email: 'test@test.com',
          name: 'Test User',
          createdAt: new Date(),
        },
      ];

      jest.spyOn(repository, 'findAllUsers').mockResolvedValue(mockUsers);

      const result = await service.findAllUsers();
      expect(result).toEqual(mockUsers);
    });
  });

  describe('findUserById', () => {
    it('should return a user by id', async () => {
      const mockUser = {
        id: 1,
        email: 'test@test.com',
        name: 'Test User',
        createdAt: new Date(),
      };

      jest.spyOn(repository, 'findUserById').mockResolvedValue(mockUser);

      const result = await service.findUserById(1);
      expect(result).toEqual(mockUser);
    });
  });

  describe('createUser', () => {
    it('should create a user', async () => {
      const mockUser = {
        id: 1,
        email: 'test@test.com',
        name: 'Test User',
        createdAt: new Date(),
      };

      jest.spyOn(repository, 'createUser').mockResolvedValue(mockUser);

      const result = await service.createUser(mockUser);
      expect(result).toEqual(mockUser);
    });
  });

  describe('deleteUser', () => {
    it('should delete a user', async () => {
      const mockUser = {
        id: 1,
        email: 'test@test.com',
        name: 'Test User',
        createdAt: new Date(),
      };

      jest.spyOn(repository, 'deleteUser').mockResolvedValue(mockUser);

      const result = await service.deleteUser(1);
      expect(result).toEqual(mockUser);
    });
  });
});
