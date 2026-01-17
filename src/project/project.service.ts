import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './Dto/create-project.dto';
import { Visibility } from 'src/common/types/visibility.enum';
import { UpdateProjectDto } from './Dto/update-project.dto';

@Injectable()
export class ProjectService {
    prisma: any;
    createDefaultProject(userId: string, createProjectDto: CreateProjectDto) {
        const project = this.prisma.project.create({
            data: {
                title: createProjectDto.title,
                description: createProjectDto.description,
                introduction: createProjectDto.introduction,
                type: createProjectDto.type,
                status: createProjectDto.status,
                tags: createProjectDto.tag,
                source: createProjectDto.source,
                sourceLink: createProjectDto.sourceLink,
                visibility: createProjectDto.visibility,
                userId: userId,
            },
        });
        return project;
    }
    getAllProjects(visibility: Visibility.Public) {
        const projects = this.prisma.project.findMany({
            where: {
                visibility: visibility,
            },
        }).orderBy({
            createdAt: 'desc',
        });
        return projects;
    }
    getProjectsByUserId(userId: string) {
        const projects = this.prisma.project.findMany({
            where: {
                userId: userId,
            },
        }).orderBy({
            createdAt: 'desc',
        });
        return projects;
    }
    getProjectsByFavorite(userId: string) {
        const projects = this.prisma.project.findMany({
            where: {
                userId: userId,
                favorite: true,
            },
        }).orderBy({
            createdAt: 'desc',
        });
        return projects;
    }
    getProjectsByTag(tag: string) {
        const projects = this.prisma.project.findMany({
            where: {
                tags: {
                    some: tag,
                    Visibility: Visibility.Public,
                },
            },
        }).orderBy({
            createdAt: 'desc',
        });
        return projects;
    }
    getProjectsByVisibility(userId: string, visibility: Visibility) {
        const projects = this.prisma.project.findMany({
            where: {
                userId: userId,
                visibility: visibility,
            },
        }).orderBy({
            createdAt: 'desc',
        });
        return projects;
    }
    getAllProjectsByVisibility(visibility: Visibility.Public) {
        const projects = this.prisma.project.findMany({
            where: {
                visibility: visibility,
            },
        }).orderBy({
            createdAt: 'desc',
        });
        return projects;
    }
    getProjectById(userId: string, projectId: string) {
        const project = this.prisma.project.findUnique({
            where: {
                id: projectId,
                userId: userId,
            },
        });
        return project;
    }
    updateProject(userId: string, projectId: string, updateProjectDto: UpdateProjectDto) {
        const project = this.prisma.project.update({
            where: {
                id: projectId,
                userId: userId,
            },
            data: {
                //  type: updateProjectDto.type,
                status: updateProjectDto.status,
                tags: updateProjectDto.tag,
                favorite: updateProjectDto.favorite,
                source: updateProjectDto.source.length > 40 ? updateProjectDto.source : null,
                sourceLink: updateProjectDto.sourceLink.startsWith('http://') || updateProjectDto.sourceLink.startsWith('https://') ? updateProjectDto.sourceLink : 'https://' + updateProjectDto.sourceLink,
                visibility: updateProjectDto.visibility,
            },
        });
        return project;
    }
    deleteProject(projectId: string, userId: string) {
        const project = this.prisma.project.delete({
            where: {
                id: projectId,
                userId: userId,
            },
        });
        return project;
    }
}
