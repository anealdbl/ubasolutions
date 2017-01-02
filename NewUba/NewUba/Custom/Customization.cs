using Monotype.Com.Web.App_Start;
using System;
using System.Web.Optimization;
using Umbraco.Core;
using Umbraco.Core.Events;
using Umbraco.Core.Logging;
using Umbraco.Core.Models;
using Umbraco.Core.Services;

namespace NewUba.Custom
{
    public class Customization : ApplicationEventHandler
    {
     //   private static ExamineIndexer _examineIndexer;
        protected override void ApplicationStarting(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
          //  DependancyHelper.RegisterDependencies();
            // Content Service
            ContentService.Created += ContentService_Created;
            ContentService.Saving += ContentService_Saving;
            ContentService.Published += ContentService_Published;
            ContentService.Trashing += ContentService_Trashing;

            // Media Service
            MediaService.Saving += MediaService_Saving;
            MediaService.Saved += MediaService_Saved;
            MediaService.Trashing += MediaService_Trashing;

        }

        protected override void ApplicationStarted(UmbracoApplicationBase umbracoApplication, ApplicationContext applicationContext)
        {
            try
            {

                //UmbracoApplicationBase.ApplicationInit += UmbracoApplicationBase_ApplicationInit;     

                //GridContext.Current.Converters.Add(new GridContentConverter());
                //_examineIndexer = new ExamineIndexer();


                BundleConfig.RegisterBundles(BundleTable.Bundles);
                LogHelper.Info<string>("Bundles Loaded");

                ////Comment this out to control this setting via web.config compilation debug attribute
                //BundleTable.EnableOptimizations = true; 
            }
            catch (Exception ex)
            {
                string hf = "";
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void ContentService_Created(IContentService sender, NewEventArgs<IContent> e)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void ContentService_Saving(IContentService sender, SaveEventArgs<IContent> e)
        {
            //Node currentNode = Node.GetCurrent();
            //var gfc = currentNode.PropertiesAsList;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void ContentService_Published(Umbraco.Core.Publishing.IPublishingStrategy sender, PublishEventArgs<IContent> e)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void ContentService_Trashing(IContentService sender, MoveEventArgs<IContent> e)
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void MediaService_Saving(IMediaService sender, SaveEventArgs<IMedia> e)
        {
            //foreach (var entity in e.SavedEntities)
            //{
            //    string a = "";
            //}
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void MediaService_Saved(IMediaService sender, SaveEventArgs<IMedia> e)
        {
            //foreach (var entity in e.SavedEntities)
            //{
            //}
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        void MediaService_Trashing(IMediaService sender, MoveEventArgs<IMedia> e)
        {
        }
    }
}