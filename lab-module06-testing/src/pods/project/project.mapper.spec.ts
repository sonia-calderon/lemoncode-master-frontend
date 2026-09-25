import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mapper', () => {
  // -----> A. Existing project

  // A.1 Project with 1 employee
  it('should return a project when the project exists', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: 'Project 1',
      externalId: '1',
      comments: 'Commenting',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'John',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });

  // A.2 Project with 2 employees
  it('should return a project with 2 employees', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: 'Project 1',
      externalId: '1',
      comments: 'Commenting',
      isActive: true,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'John',
        },
        {
          id: '2',
          isAssigned: false,
          employeeName: 'Alex',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
    expect(result.employees).toHaveLength(2);
  });

  // A.3 Project with 0 employees
  it('should return a project with empty employees', () => {
    // Arrange
    const project: viewModel.Project = {
      id: '1',
      name: 'Project 1',
      externalId: '1',
      comments: 'Commenting',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(project);
  });

  // -----> B. Unexisting project

  // B.1 Null project
  it('should return a new empty project when the project is null', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  // B.2 Undefined project
  it('should return a new empty project when the project is undefined', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });
});
