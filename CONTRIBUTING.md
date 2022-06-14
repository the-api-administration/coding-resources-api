<!-- CONTRIBUTING -->

# Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. 

<ins>Please make sure to follow our guidelines below before making any contributions.</ins>



## Understanding Coding-Resources-API branch structure
## Permanent Branches
### Main
- This branch is reserved for tested versions of our code-base. Do not make a PR directly into this branch, as we require testing before we can confirm any feature.



## Test
- This branch is used to test a collection of newly added features, which will eventually become a future iteration of our application after thoroughly testing for bugs and code/guideline consistency. If you are interested in creating your own feature, we suggest that you first open an issue here: https://github.com/the-api-administration/coding-resources-api/issues and wait for our team to respond to your message and approve the implementation. If you are interested in taking responsibility for the implementation, please assign yourself to the issue once you submit it, so that our team can note your interest.



## Resources
- This branch is reserved for adding new resources to our resources.js file. When adding a resource, follow these styling guidelines or we will be unable to address your contribution. 

  Resource Addition Guidelines:

  - The resource <ins>must</ins> strictly pertain to coding. Please do not include resources that represent non-coding-related content.
  - The resources provided <ins>must</ins> strictly pertain to specific coding related topics, technologies, and content. We will not accept resources that are too broad and/or do not provide a specific focus.

  Resource Styling:

  - Object values <ins>must</ins> contain single quotes only.
  - Keywords array should contain strings only.
  - Keywords are preferred in lower case.
  - Keywords <ins>must</ins> be specific. Do not include broad keywords such as 'guide', 'tutorial', 'information' or we will be unable to process your PR. Please opt for keywords that are specific to the content.

  Resource Format:

  ```
  {
    name: 'resource name',
    url: 'url here',
    keywords: ['each', 'keyword', 'should', 'be', 'a', 'string']
  },
  ```
  
  
  
## How often should I stage changes?

We require that you stage your changes for each section of code you develop. <ins>Do not</ins> stage changes with a single large commit, or we will instantly close your pull request. We would like you to make commits for every task you complete in your code and avoid working through multiple files when possible. Your commit message should include a detailed view of the work you are implementing and an issue you are solving if you have assigned yourself to an issue.



## Where should I make my pull request to?

<ins>Never make a pull request into our main branch</ins>. If you plan on adding a feature, wait until you have completely finished that feature and then make a pull request into "test" with a clear description of the issue you are solving. If you are planning on adding a resource, please make a pull request to the resources branch.



## Creating an Issue

We'd love to hear your advice, feature suggestions and/or read about any bugs you've encountered. Please create an issue here: https://github.com/the-api-administration/coding-resources-api/issues. If you wish to implement a feature on your own, please add yourself as an assignee to the issue you create, so that we can note your interest. When creating an issue, please attempt to outline in detail the topic of the issue, and a thorough description of what the issue attempts to solve. 

If you have encountered a bug, please provide as much information as you can to help us replicate the issue on our own end. Depending on the issue, it may be useful to communicate your browser, screen width, and/or anything that relates to your specific encounter.



## How to make a PR

If you want to help us improve our API, please fork the repo and follow these steps before creating a pull request.

1. Visit [our Issues](https://github.com/the-api-administration/coding-resources-api/issues) page to check if an issue exists and does not yet have an assignee. Assign yourself to the issue if you find what you are planning to solve.
2. Fork the Project
3. Clone your fork on your local device. The link can be found under the code drop-down at the base of your fork (`git clone <link here>`)
4. If you are adding a resource, please skip to step 6.
5. Create a new branch for your Feature (`git branch AmazingFeature`)
6. Switch to the branch you are working on (`git checkout AmazingFeature`)
7. Make your changes, commit after every isolated task.
8. Add all of your changes (`git add .`)
9. Commit your changes with a detailed description (`git commit -m 'added a, solved b, etc...'`)
10. Push to the Branch (`git push origin AmazingFeature`)
11. Open a Pull Request and follow the rules under "Where should I make my pull request to?"
