// import { Injectable } from '@nestjs/common';
// import { ReviewEntity } from 'src/database/entities/review.entity';
// import { OfferingEntity } from "src/database/entities/offering.entity";
// import { DataSource, Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { ReviewRepository } from 'src/database/repositories/review.repository';
// import { ReviewRepositoryType } from 'src/database/types/reviewTypes';
// // import { CreateOfferingInput } from 'src/graphql/inputs/createOffering.input';
// // import { OfferingFilterInput } from 'src/graphql/inputs/offeringFilter.input';
// // import { UpdateOfferingInput } from 'src/graphql/inputs/updateOffering.input';

// @Injectable()
// export class ReviewService {
//   private reviewRepository: ReviewRepositoryType
//   constructor(
//     private readonly dataSource: DataSource,

//     @InjectRepository(OfferingEntity)
//     private readonly offeringRepository: Repository<OfferingEntity>,

//   ) {
//     this.reviewRepository = ReviewRepository(this.dataSource);
//   }

//   async createReview(
//     createReviewInput: CreateReviewInput
//   ): Promise<ReviewEntity> {
//     const offering = await this.offeringRepository.findOne(
//       { where: { id: createReviewInput.offering_id } }
//     );
    
//     if (!offering) {
//       throw new Error('Offering not found');
//     }
//     return this.reviewRepository.createReview(createReviewInput, offering);
//   }

//   async deleteReview(id: string): Promise<boolean> {
//     return this.reviewRepository.deleteReview(id);
//   }

// //   async findReviewsByFilters(filterInput: ReviewFilterInput): Promise<ReviewEntity[]> {
// //     const { category, city } = filterInput;
// //     return this.reviewRepository.findReviewByFilters(category, city);
// //   }

//   async findReviewsByOffering(offeringId: string): Promise<ReviewEntity[]> {
//     return this.reviewRepository.findReviewsByOffering(offeringId);
//   }
// }